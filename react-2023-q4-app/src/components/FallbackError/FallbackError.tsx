import { Component } from 'react';

import { ErrorIcon } from '@/assets/icons';

import styles from './FallbackError.module.scss';

interface IErrorProps {
  message?: Error['message'];
}

export class FallbackError extends Component<IErrorProps, Record<string, never>> {
  constructor(props: IErrorProps) {
    super(props);
  }

  reloadPage = () => {
    window.location.reload();
  };

  render() {
    const { message } = this.props;

    return (
      <div className={styles.error}>
        <div className={styles.error__body}>
          <ErrorIcon width="70" height="70" className={styles.error__icon} />
          <h2 className={styles.error__image}>Oops, something went wrong!</h2>
          <p className={styles.error__message}>{message}</p>
          <button className={styles.error__reload} onClick={this.reloadPage}>
            Reload the page
          </button>
        </div>
      </div>
    );
  }
}
