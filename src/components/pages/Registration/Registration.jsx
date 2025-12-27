import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import styles from './Registration.module.css';

const Registration = () => {
  const { register: registerForm, handleSubmit, formState: { errors }, watch } = useForm();
  const { register } = useUser();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password
    };
    register(userData);
    alert('Регистрация успешна!');
    navigate('/profile');
  };

  return (
    <div className={styles.registrationPage}>
      <main className={styles.main}>
        <h4>Регистрация</h4>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
              type="text"
              placeholder="Полное имя"
              {...registerForm('fullName', {
                required: 'Полное имя обязательно',
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа'
                }
              })}
            />
            {errors.fullName && <span className={styles.errorText}>{errors.fullName.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <input
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              type="email"
              placeholder="Email"
              {...registerForm('email', {
                required: 'Email обязателен',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Некорректный email'
                }
              })}
            />
            {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <input
              className={`${styles.input} ${errors.phone ? styles.error : ''}`}
              type="tel"
              placeholder="+7 xxx xxx xxxx"
              {...registerForm('phone', {
                required: 'Телефон обязателен',
                pattern: {
                  value: /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                  message: 'Некорректный номер телефона'
                }
              })}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <input
              className={`${styles.input} ${errors.password ? styles.error : ''}`}
              type="password"
              placeholder="Пароль"
              {...registerForm('password', {
                required: 'Пароль обязателен',
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов'
                }
              })}
            />
            {errors.password && <span className={styles.errorText}>{errors.password.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <input
              className={`${styles.input} ${errors.confirmPassword ? styles.error : ''}`}
              type="password"
              placeholder="Подтвердите пароль"
              {...registerForm('confirmPassword', {
                required: 'Подтверждение пароля обязательно',
                validate: value =>
                  value === watch('password') || 'Пароли не совпадают'
              })}
            />
            {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword.message}</span>}
          </div>

          <button type="submit" className={styles.saveButton}>
            Сохранить аккаунт
          </button>
        </form>
      </main>
    </div>
  );
};

export default Registration;
