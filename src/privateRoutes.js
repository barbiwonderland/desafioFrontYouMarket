function PrivateRoute({ component: Component, ...rest }) {
  // le pongo true apra que siempre deje entrar, esto deberia verificarse realmente
  const isAuth = true

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
