const navObj = {
  home: { label: "Home", path: "", type: "main" },
  profile: { label: "Profile", path: "my-profile", type: "main" },
  feed: { label: "Feed", path: "feed", type: "main" },
  board: { label: "Board", path: "my-board", type: "main" },

  userProfile: { label: "User Profile", path: "user-profile", type: "param" },
  userBoard: { label: "User Board", path: "user-board", type: "param" },
  userPost: { label: "View Post", path: "user-post", type: "param" },
  notification: { label: "Notifications", path: "notifications", type: "main" },

  aboutUs: { label: "About Us", path: "about-us", type: "company" },
  contactUs: { label: "Contact Us", path: "contact-us", type: "company" },
  termsAndCondions: { label: "Terms & Conditions", path: "terms-conditions", type: "company" },
  privacypolicy: { label: "Privacy Policy", path: "privacy-policy", type: "company" },
};

export { navObj };
