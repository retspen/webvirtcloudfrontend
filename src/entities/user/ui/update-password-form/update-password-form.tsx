import { useForm } from 'react-hook-form';
import tw from 'twin.macro';

import { type UpdatePasswordPayload, updatePassword } from '@/entities/user';
import { Button } from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';

export function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm<UpdatePasswordPayload>({ mode: 'onChange' });

  const onSubmit = async (data: UpdatePasswordPayload) => {
    try {
      await updatePassword(data);

      window.localStorage.removeItem('token');

      window.location.href = '/sign-in';
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={tw`space-y-4`}>
      <Input
        {...register('old_password', { required: 'Current password is required.' })}
        placeholder="Your current password"
        label="Current password"
        type="password"
        id="current_password"
        name="current_password"
        size="lg"
        error={errors.old_password?.message}
        required
      />
      {/* {errors.old_password && (
        <p css={tw`text-red-500`} role="alert">
          {errors.old_password?.message}
        </p>
      )} */}
      <Input
        {...register('new_password', {
          required: 'New password is required.',
          minLength: { message: 'Password should be at least 6 characters.', value: 6 },
        })}
        placeholder="New secure password"
        label="New password"
        type="password"
        id="new_password"
        name="new_password"
        size="lg"
        required
        error={errors.new_password?.message}
      />
      {/* {errors.new_password && (
        <p css={tw`text-red-500`} role="alert">
          {errors.new_password?.message}
        </p>
      )} */}
      <Input
        {...register('new_password_confirm', {
          required: 'New password is required.',
          minLength: { message: 'Password should be at least 6 characters.', value: 6 },
        })}
        placeholder="New secure password again"
        label="New password confirm"
        type="password"
        id="new_password_confirm"
        name="new_password_confirm"
        size="lg"
        required
      />
      {errors.new_password_confirm && (
        <p css={tw`text-red-500`} role="alert">
          {errors.new_password_confirm?.message}
        </p>
      )}
      <Button
        css={tw`w-full`}
        size="lg"
        type="submit"
        loading={isSubmitting}
        disabled={!isValid}
      >
        Change password
      </Button>
    </form>
  );
}
