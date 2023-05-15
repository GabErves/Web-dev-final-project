import supabase from "./supabase";

const getCurrentUser = async () => {
  // grab the session from supabase (which handles all authentication)
  const session = await supabase.auth.getSession();
  // if a user property exists in the session.data.session object
  if (session?.data?.session?.user) {
    //grab from the meta table we created for the current logged
    // in user, and attach it to the user object under the key
    // barge meta, this is so we can access for the current user's
    // name and slug
    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.data.session.user.id)
      .single();
    // here we take the user from the session.data.session
    // object and attach to it a property bargeMeta
    // that holds the name and slug (and some other info
    // that is not important)
    const user = { ...session.data.session.user, ListoMeta: data };
    return {
      data: user,
      error,
    };
  }
  return null;
};

// register a user//
/**
 * Register a user
 * @param {*} email
 * @param {*} first_name
 * @param {*} last_name
 * @param {*} username
 * @param {*} password
 * @returns plain old javascript object with success, message and optionally, the rest of the addMetaResponse.data object
 */
const registerUser = async (
  email,
  first_name,
  last_name,
  username,
  password
) => {
  const { data, error } = await supabase
    .from("profile") //table we want to select
    .select("*")
    .eq("username", username);
  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }
  if (data.length > 0) {
    return {
      success: false,
      message: "Username already exists",
    };
  }

  const authResponse = await supabase.auth.signUp({
    email,
    password,
  });

  if (authResponse.error) {
    return {
      success: false,
      message: authResponse.error.message,
    };
  }

  if (authResponse.data.user) {
    const addMetaResponse = await supabase
      .from("profile")
      .insert([
        { user_id: authResponse.data.user.id, first_name, last_name, username },
      ]);

    if (addMetaResponse.error) {
      return {
        success: false,
        message: addMetaResponse.error.message,
      };
    }
    return {
      success: true,
      message:
        "Registration successful, please wait a few moments to be taken to the login page",
      ...addMetaResponse.data,
    };
  }

  return {
    success: false,
    message: "An unknown error has occurred",
  };
};

/**
 * Log in a user
 * @param {*} email
 * @param {*} password
 * @returns plain old javascript object with success, message and optionally, the rest of the addMetaResponse.data object
 *
 * NOTE, it previously responded with error as the name of the key, it was renamed to message
 * for consistency
 */
const loginUser = async (email, password) => {
  const authResponse = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authResponse.error) {
    return {
      success: false,
      message: authResponse.error,
    };
  }

  if (authResponse.data.user) {
    const meta = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", authResponse.data.user.id);

    if (meta.error) {
      return {
        success: false,
        message: meta.error,
      };
    }
    return {
      ...authResponse,
      meta,
      success: true,
    };
  }

  return {
    success: false,
    message: "An unknown error has occurred",
  };
};

export { getCurrentUser, loginUser, registerUser };
