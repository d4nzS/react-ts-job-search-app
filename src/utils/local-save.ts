const localSave = <T, >(key: string, value: T): void => {
  localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
};

export default localSave;