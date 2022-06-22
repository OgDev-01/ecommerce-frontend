# `components/atoms/button`

- A reuseable button component that is rendered based on the props received

# props examples

- `variants` is a string value the specifies the type of button to rendered. accepted values are `"full-width"` and `"default"`.
- `urlPath` is a string value the specifies the url location of the button. **\* required**
- `icon` is an object with 3 values namely: `url`, `position` and `alt`
- `text` is a string value the specifies the text in the button. **\* required**

## required props

- `urlPath`
- `text`

## optional props

- `icon`
- `variants`

> If `variants` props is not provided,`"default"` is used as a fallback
> `icon` props must be and object with the three above listed props
