import { DatePicker } from 'antd';
import {
  FormattedMessage,
} from 'umi/locale';

export default () => {
  return (
    <div>
      <DatePicker />
      <FormattedMessage id="helloworld" />
    </div>
  )
}
