import style from './ErrorPage404.module.css';

export function ErrorPage404() {
  return (
    <div className={style.messages}>
      <div>{'Page not found'}</div>
      <div>{'404'}</div>
    </div>
  );
}
