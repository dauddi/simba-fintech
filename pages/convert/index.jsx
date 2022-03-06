import React from 'react'
import { Layout } from '../../components/shared';

const Convertion = () => {
  return (
    <div>Currency Convertion Page</div>
  )
}

Convertion.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Convertion