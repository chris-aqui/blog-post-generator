import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout/AppLayout';

export default function NewPost(props) {
  return <div>this is the `post/new` page</div>;
}

// 
NewPost.getLayout = function getLayout(page, pageProps) {
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