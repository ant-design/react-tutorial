import router from 'umi/router';
import { Button } from 'antd';

export default () =>
  <>
    <h1>Dashboard Analysis Page</h1>
    <Button type="primary" onClick={() => {
      router.goBack();
    }}>Back</Button>
  </>

