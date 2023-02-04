import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import StudentForm from '../components/Profile/StudentForm';

export default withPageAuthRequired(function SSRPage() {
  return <StudentForm />;
});
