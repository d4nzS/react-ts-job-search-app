export const getResponsiveInputPlaceholder = (): string => {
  return window.innerWidth >= 576 ? 'Введите название вакансии' : 'Введите название';
};