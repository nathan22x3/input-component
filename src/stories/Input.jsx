import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export const Input = ({
  name,
  label,
  value,
  placeholder,
  size,
  fullWidth,
  startIcon,
  endIcon,
  multiline,
  row,
  error,
  helperText,
  disabled,
}) => {
  const [text, setText] = useState(value);
  const [isFocus, setIsFocus] = useState(false);

  const StartIcon = () => {
    try {
      const Icon = require(`@material-ui/icons/${startIcon}`).default;
      return <Icon fontSize='small' css={tw`text-grey`} />;
    } catch (error) {
      return <></>;
    }
  };

  const EndIcon = () => {
    try {
      const Icon = require(`@material-ui/icons/${endIcon}`).default;
      return <Icon fontSize='small' css={tw`text-grey`} />;
    } catch (error) {
      return <></>;
    }
  };

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <div
      className='group'
      css={[
        tw`flex flex-col gap-y-1 w-[fit-content] text-sm font-notosans text-grey-dark hover:text-grey-dark`,
        fullWidth && tw`w-full`,
      ]}
    >
      <label
        htmlFor={name}
        css={[
          tw`duration-200 group-hover:text-grey-dark`,
          isFocus && tw`text-blue`,
          error && !disabled && tw`text-red`,
        ]}
      >
        {label}
      </label>
      <div
        css={[
          tw`flex items-center gap-x-3 w-[200px] px-4 py-[18px] border rounded-lg border-grey text-sm duration-200 focus-within:border-blue group-hover:border-grey-dark`,
          error && tw`border-red focus-within:border-red`,
          disabled &&
            tw`bg-grey-lightest !border-grey-light hover:border-inherit`,
          size === 'sm' && tw`py-[10px]`,
          fullWidth && tw`w-full`,
        ]}
      >
        {startIcon && <StartIcon />}
        <input
          {...{
            id: name,
            type: 'text',
            placeholder,
            value: text,
            disabled,
            onChange,
            onFocus,
            onBlur,
          }}
          css={[
            tw`w-full outline-none placeholder-grey bg-inherit duration-200`,
            multiline && tw`hidden`,
          ]}
        />
        <textarea
          {...{
            id: name,
            placeholder,
            value: text,
            rows: row,
            disabled,
            onChange,
            onFocus,
            onBlur,
          }}
          css={[
            tw`w-full outline-none placeholder-grey bg-inherit resize-none duration-200`,
            !multiline && tw`hidden`,
          ]}
        />
        {endIcon && <EndIcon />}
      </div>
      {helperText && (
        <span
          css={[
            tw`text-2xs text-grey duration-200`,
            error && !disabled && tw`text-red group-hover:text-grey`,
          ]}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
  fullWidth: PropTypes.bool,
  /**
   * Name of the icon.
   * Search the full list of icons at: https://material-ui.com/components/material-icons/
   */
  startIcon: PropTypes.string,
  /**
   * Name of the icon.
   * Search the full list of icons at: https://material-ui.com/components/material-icons/
   */
  endIcon: PropTypes.string,
  multiline: PropTypes.bool,
  row: PropTypes.number,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  label: 'Label',
  value: '',
  placeholder: 'Placeholder',
  size: 'md',
  fullWidth: false,
  startIcon: '',
  endIcon: '',
  multiline: false,
  row: 1,
  error: false,
  helperText: '',
  disabled: false,
};
