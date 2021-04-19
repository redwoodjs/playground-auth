import classNames from 'classnames'

export default ({ provider, ...rest }) => {
  const { logo, value, label, disabled } = provider

  const buttonClasses = classNames(
    'p-2 border border-red-300 rounded-md flex justify-center items-center',
    {
      ['bg-gray-200 opacity-75 cursor-not-allowed']: disabled,
    }
  )

  return (
    <button
      {...rest}
      disabled={disabled}
      title={label}
      value={value}
      className={buttonClasses}
    >
      <img
        src={logo}
        style={{
          maxWidth: '25px',
          filter: disabled ? 'grayscale(1)' : 'grayscale(0)',
        }}
        alt={label}
      />
    </button>
  )
}
