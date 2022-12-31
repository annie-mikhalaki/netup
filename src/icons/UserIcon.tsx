const UserIcon = ({ width = 22, height = 22 }) => {
  return (
    <div style={{ padding: '17px' }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 11C13.9006 11 16.25 8.65063 16.25 5.75C16.25 2.84938 13.9006 0.5 11 0.5C8.09937 0.5 5.75 2.84938 5.75 5.75C5.75 8.65063 8.09937 11 11 11ZM11 13.625C7.49563 13.625 0.5 15.3837 0.5 18.875V21.5H21.5V18.875C21.5 15.3837 14.5044 13.625 11 13.625Z'
          fill='white'
        />
      </svg>
    </div>
  );
};

export default UserIcon;
