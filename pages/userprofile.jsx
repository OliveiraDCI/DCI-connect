import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import StudentForm from '../components/Profile/StudentForm';

export default function SSRPage({ user }) {
  return <StudentForm user={user} />;
}

export const getServerSideProps = withPageAuthRequired();
