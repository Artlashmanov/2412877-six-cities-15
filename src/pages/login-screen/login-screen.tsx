import { useNavigate } from 'react-router-dom';
import { AppRoutes, CITIES } from '../../const';
import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks/store-hooks';
import { loginAction } from '../../store/api-actions';
import CityItem from '../../components/city-item/city-item';

function LoginScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitLoginForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            navigate(AppRoutes.Main);
          }
        });
    }
  };

  const randomCityIndex = Math.floor(Math.random() * CITIES.length);

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login" data-testid="Login Page">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmitLoginForm}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" ref={emailRef} type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                pattern='^.*(?=.*[a-zA-Z])(?=.*\d).*$'
                title='Пароль должен содержать как минимум 1 букву и 1 цифру'
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <CityItem city={CITIES[randomCityIndex].name} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
