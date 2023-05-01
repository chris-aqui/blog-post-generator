import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function TokenTopUp(props) {
  return <div>this is the token Top-Up page</div>;
}

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