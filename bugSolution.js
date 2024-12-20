// bugSolution.js
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  // Simulate fetching data
  const posts = [{
    id: '1',
    title: 'Post 1'
  }, {
    id: '2',
    title: 'Post 2'
  }];

  const post = posts.find(post => post.id === id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>  
  }

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
