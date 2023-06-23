export const getStoredCookie = () => {
  const storedUsername= decodeURIComponent(
    document.cookie.replace(
      /(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    )
  );
  const storedPassword = decodeURIComponent(
    document.cookie.replace(
      /(?:(?:^|.*;\s*)password\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    )
  );
  return[storedUsername,storedPassword];
};
