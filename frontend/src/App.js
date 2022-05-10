import logo from './logo.svg';
import './App.css';
import {Card, Button, FormControl, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/navigation';

const App = () => {
  // const { loading, error, data, refetch } = useQuery(
  //   POSTS_QUERY,
  //   {
  //     variables: {
  //       postLimit: 4,
  //     },
  //     // fetchPolicy: 'no-cache',
  //     // pollInterval: 1000,
  //   },
  // )
  // if (loading) {
  //   return <h4>Loading ...</h4>
  // }
  // if (error) {
  //   return <h4>Error: {error.message}</h4>
  // }
  return (
    // <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    //   <Posts posts={data.posts} refetch={refetch} />
    //   <CreatePost refetch={refetch} />
    // </main>
    <Navigation />
  );
}

export default App;