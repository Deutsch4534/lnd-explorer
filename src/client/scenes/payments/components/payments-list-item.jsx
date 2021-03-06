import React from 'react';
import PropTypes from 'prop-types';
import { Hex } from '../../../components/hex';
import { BtcAmount } from '../../../components/btc-amount';
import { Timestamp } from '../../../components/timestamp';

export const PaymentsListItem = ({ payment }) => (
  <tr>
    <td>
      <Hex value={payment.payment_hash} />
    </td>
    <td>
      <BtcAmount satoshi={payment.value} />
    </td>
    <td>
      <Timestamp timestamp={payment.creation_date} />
    </td>
    <td>
      <Hex value={payment.path.join(',')} />
    </td>
    <td>
      <BtcAmount satoshi={payment.fee} />
    </td>
  </tr>
);

PaymentsListItem.propTypes = {
  payment: PropTypes.object.isRequired,
};
