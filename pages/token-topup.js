import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout/AppLayout';

export default function TokenTopUp(props) {
  return <div>this is the token Top-Up page</div>;
}

// 
TokenTopUp.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    // const props = await getAppProps(ctx);

    // if (!props.availableTokens) {
    //   return {
    //     redirect: {
    //       destination: '/token-topup',
    //       permanent: false,
    //     },
    //   };
    // }
    const props = {}

    return {
      props,
    };
  },
});