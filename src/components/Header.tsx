interface Props {
  isLoggedIn?: boolean
}

export const Header = ({ isLoggedIn = false }: Props) => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="./DacodesLogo2.svg"
        width="172"
        height="68"
        alt="dacodes logo"
      />
      {!isLoggedIn && (
        <img
          className="header__btn"
          src="./login1.svg"
          width="62"
          height="62"
          alt="login icon"
        />
      )}
    </header>
  )
}
