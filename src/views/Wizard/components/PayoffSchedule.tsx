import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {getPayoffSchedule} from '../../../api/getPayoffSchedule';
import {IUser} from '../../../types';

interface IProps {
  user: IUser;
}

const PayoffSchedule: React.FC<IProps> = ({user}) => {
  const [payoff, setpayoff] = useState({
    months: 0,
    years: 0,
  });

  useEffect(() => {
    getPayoff();
  }, []);

  const getPayoff = async () => {
    let payoffTime = await getPayoffSchedule(user?._id);

    setpayoff(payoffTime);
  };

  const formatPayoff = () => {
    return `${payoff?.years} years and ${payoff.months} months`;
  };

  return (
    <View
      style={{paddingTop: 75, justifyContent: 'center', alignItems: 'center'}}>
      <Title>Your debt will be payed off in:</Title>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>{formatPayoff()}</Text>
    </View>
  );
};

export default PayoffSchedule;
