import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import StudentForm from '../components/Profile/StudentForm';
import MentorForm from '../components/Profile/MentorForm';

export default withPageAuthRequired(function SSRPage() {
  return (
    <div>
      <StudentForm />
      <MentorForm />
    </div>
  );
});
