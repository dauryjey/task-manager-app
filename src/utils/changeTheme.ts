export const changeTheme = (theme: boolean) => {
  const newTheme = theme ? "light" : "dark"
  localStorage.theme = newTheme
}
