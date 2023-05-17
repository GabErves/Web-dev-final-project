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

    if (error) {
      return {
        data: null,
        error: error.message,
      };
    }

    const user = { ...session.data.session.user, ListoMeta: data };

    return {
      data: user,
      error: null,
    };
  }

  return {
    data: null,
    error: null,
  };
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
}; //End of login user

//Log out a user
const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error logging out:", error.message);
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Logged out successfully",
  };
}; //End of logoutUser

const getUserByUsername = async (username) => {
  const { data, error } = await supabase
    .from("profile")
    .select("user_id")
    .eq("name", username)
    .limit(1)
    .single();
  if (error) {
    return {
      success: false,
      error,
    };
  }

  return {
    success: true,
    data,
  };
};


// const addListItem = async (
//     userId,
//     listTitle,
//     listItems,
//     createdAt,
//     username
//   ) => {
//     try {
//       const insertData = listItems.map((item, index) => ({
//         user_id: userId,
//         list_title: listTitle,
//         list_item: item,
//         is_checked: false,
//         order: index,
//         created_at: createdAt,
//         username: username,
//       }));
  
//       const { data, error } = await supabase.from('lists').insert(insertData);
//       if (error) {
//         throw new Error(error.message);
//       }
//       return data; // return the inserted items
//     } catch (error) {
//       console.error(error.message);
//       return null;
//     }
//   };


const addNewList = async (
  user_id,
  list_title,
  list_item,
  order,
  username,
  is_checked
) => {
  //linkRequestData.data = null;
  const insertResponse = await supabase.from("lists").insert({
    user_id,
    list_title,
    list_item,
    order,
    username,
    is_checked,
  });
  if (insertResponse.error) {
    return {
      success: false,
      error: insertResponse.error,
    };
  }
  return {
    success: true,
    message: "successfully added",
    data: insertResponse.data,
  };
};

const getList = async () => {};
export {
  addNewList,
  getCurrentUser,
  loginUser,
  registerUser,
  logoutUser,
  getUserByUsername,
  getList,
};

export { getCurrentUser, loginUser, registerUser, logoutUser, getUserByUsername };