import {useState} from 'react';
import {IDebt, IDebtCategory, IPlanned} from '../types';

interface UseInsertModalInitialValues {
  showInsertModal: boolean;
  insertHeader: string;
  insertCategories: IPlanned[] | IDebtCategory[];
  setIsInsertModalVisible: any;
}

export const useInsertModal = (): UseInsertModalInitialValues => {
  const [showInsertModal, setShowModal] = useState(false);
  const [insertHeader, setHeader] = useState('');
  const [insertCategories, setCategories] = useState<
    IPlanned[] | IDebtCategory[]
  >([]);

  const setIsInsertModalVisible = (
    open: boolean,
    header: string,
    categories: IPlanned[] | IDebtCategory[],
  ) => {
    if (open === false) {
      setShowModal(false);
      setHeader('');
      setCategories([]);
    } else {
      setHeader(header);
      setCategories(categories);
      setShowModal(true);
    }
  };

  return {
    showInsertModal,
    insertHeader,
    insertCategories,
    setIsInsertModalVisible,
  };
};
