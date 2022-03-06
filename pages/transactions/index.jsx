import React from 'react'
import { Layout } from '../../components/shared';

const Transactions = () => {
  return (
    <div>Transactions Page</div>
  )
}

Transactions.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Transactions