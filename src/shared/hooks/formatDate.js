const getFormattedDate = (date) => {
  return new Date(date).toLocaleDateString("es-ES");
};

const FormatDate = ({ children, tag = "span", ...rest }) => {
  const Tag = tag;
  const formattedDate = getFormattedDate(children);

  return <Tag {...rest}>{formattedDate}</Tag>;
};

export default FormatDate;
