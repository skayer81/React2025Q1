import style from './loadingOverlay.module.css';

interface Props {
  isLoading: boolean;
  message: string;
}

export function LoadingOverlay(props: Props) {
  if (!props.isLoading) {
    return null;
  }
  return (
    <div className={style.overlay}>
      <p>{props.message}</p>
    </div>
  );
}
