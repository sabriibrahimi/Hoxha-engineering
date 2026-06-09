export const asset = (path) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${process.env.PUBLIC_URL}${normalized}`;
};
