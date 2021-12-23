import React, { useState } from 'react';
import { ShippingAddressPC } from '@kkb/kmos-libra-react-test';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = (params) => {
    console.log(params);
  };
  return (
    <div>
      <button onClick={showModal}>收货地址+++</button>
      <ShippingAddressPC
        {...{
          env: 'test',
          userId: 56734799,
          mobile: '15770896001',
          visiable: isModalVisible,
          onCancel: handleCancel,
          handleOk,
          destroyValue: true,
        }}
      />
    </div>
  );
}

export default App;