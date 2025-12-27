import React from 'react';
import { useForm } from 'react-hook-form';
import { useUser } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  const { user, updateUser, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      gender: user?.gender || '',
      cardNumber: user?.cardNumber || '',
      cardExpiry: user?.cardExpiry || '',
      cardCVV: user?.cardCVV || ''
    }
  });

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/registration');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    updateUser(data);
    alert('Профиль обновлен!');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.profilePage}>
      <main className={styles.main}>
        <div className={styles.profileInfo}>
          <h3>Профиль</h3>
          <img src="svg/Profile2.svg" alt="profile" width="200px" className={styles.icon} />
          
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputContainer}>
              <div className={styles.formGroup}>
                <input
                  placeholder="Имя"
                  className={`${styles.input} ${errors.firstName ? styles.error : ''}`}
                  type="text"
                  {...register('firstName', {
                    required: 'Имя обязательно',
                    minLength: { value: 2, message: 'Минимум 2 символа' }
                  })}
                />
                {errors.firstName && <span className={styles.errorText}>{errors.firstName.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <input
                  placeholder="Фамилия"
                  className={`${styles.input} ${errors.lastName ? styles.error : ''}`}
                  type="text"
                  {...register('lastName', {
                    required: 'Фамилия обязательна',
                    minLength: { value: 2, message: 'Минимум 2 символа' }
                  })}
                />
                {errors.lastName && <span className={styles.errorText}>{errors.lastName.message}</span>}
              </div>

              <div className={styles.genderGroup}>
                <label>
                  <input
                    type="radio"
                    value="male"
                    {...register('gender', { required: 'Выберите пол' })}
                  />
                  <span>М</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    {...register('gender', { required: 'Выберите пол' })}
                  />
                  <span>Ж</span>
                </label>
              </div>
              {errors.gender && <span className={styles.errorText}>{errors.gender.message}</span>}

              <button type="submit" className={styles.saveButton}>
                Сохранить
              </button>
            </div>
          </form>
        </div>

        <div className={styles.paymentInfo}>
          <div className={styles.cart}>
            <h4>Ваши реквизиты</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <input
                  placeholder="**** **** **** 1234"
                  className={`${styles.inputCart1} ${errors.cardNumber ? styles.error : ''}`}
                  type="text"
                  {...register('cardNumber', {
                    pattern: {
                      value: /^[0-9\s]{16,19}$/,
                      message: 'Некорректный номер карты'
                    }
                  })}
                />
                {errors.cardNumber && <span className={styles.errorText}>{errors.cardNumber.message}</span>}
              </div>

              <div className={styles.cardDetails}>
                <div className={styles.formGroup}>
                  <input
                    placeholder="12/25"
                    className={`${styles.inputCart2} ${errors.cardExpiry ? styles.error : ''}`}
                    type="text"
                    {...register('cardExpiry', {
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                        message: 'Формат: MM/YY'
                      }
                    })}
                  />
                  {errors.cardExpiry && <span className={styles.errorText}>{errors.cardExpiry.message}</span>}
                </div>

                <div className={styles.formGroup}>
                  <input
                    placeholder="***"
                    className={`${styles.inputCart2} ${errors.cardCVV ? styles.error : ''}`}
                    type="text"
                    maxLength="3"
                    {...register('cardCVV', {
                      pattern: {
                        value: /^[0-9]{3}$/,
                        message: '3 цифры'
                      }
                    })}
                  />
                  {errors.cardCVV && <span className={styles.errorText}>{errors.cardCVV.message}</span>}
                </div>
              </div>
            </form>
          </div>
        </div>

        <button onClick={handleLogout} className={styles.logoutButton}>
          Выйти
        </button>
      </main>
    </div>
  );
};

export default Profile;
