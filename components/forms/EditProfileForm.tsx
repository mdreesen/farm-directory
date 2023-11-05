import * as y from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { EmailRegex } from 'settings/util.settings';
import type { IGetFieldState } from 'types/types';

interface IForm {
  firstname: string;
  lastname: string;
  email: string;
}

interface IError {
  field: IGetFieldState;
  className?: string;
}

function InputError({ className, field }: IError) {
  return (
    <div className={className}>
      {field.error?.message || (!field.isDirty && field.isTouched && <>Required</>) || <>&nbsp;</>}
    </div>
  );
}

export function EditProfileForm() {
  const { handleSubmit, formState, reset, register, getFieldState } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(
      new y.ObjectSchema<IForm>({
        firstname: y.string().required('Required'),
        lastname: y.string().required('Required'),
        email: y.string().required('Required').required('Required').matches(EmailRegex, 'Must be a valid email'),
      })
    ),
  });

  const valid = formState.isValid;

  return (
    <form
      onSubmit={handleSubmit(async (submit) => {
        console.log(valid);
        console.log(submit);

        // try {
        // } catch (error) {
        //   console.log(error);
        // }

        reset();
      })}
    >
      <div className='edit-profile-form__group'>
        <input type='text' placeholder='First Name' {...register('firstname')} />
        <InputError className='edit-profile-form__error' field={getFieldState('firstname', formState)} />
      </div>

      <div className='edit-profile-form__group'>
        <input type='text' placeholder='Last Name' {...register('lastname')} />
        <InputError className='edit-profile-form__error' field={getFieldState('lastname', formState)} />
      </div>

      <div className='edit-profile-form__group'>
        <input type='text' placeholder='Email' {...register('email')} />
        <InputError className='edit-profile-form__error' field={getFieldState('email', formState)} />
      </div>

      <button type='submit' disabled={!valid}>
        submit
      </button>
    </form>
  );
}
