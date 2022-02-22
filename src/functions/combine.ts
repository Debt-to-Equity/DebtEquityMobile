import { IActual, ICombined, IPlanned } from '../types';

export function combineCategoryAndActual(
  categories: IPlanned[],
  actuals: IActual[],
): ICombined[] {
  return categories.map(category => {
    let total = 0;
    for (let actual of actuals) {
      if (actual.categoryId === category.id) {
        total += actual.number;
      }
    }
    return {
      name: category.name,
      number: total,
      categoryId: category.id,
      color: category.color,
      extraData: actuals
    };
  });
}
