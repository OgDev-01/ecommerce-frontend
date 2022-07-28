import {
  handleFavoriteUpdate,
  handleAddToCart,
} from '@/base/functions/functions';
import {
  ButtonFullWidth,
  ButtonDefault,
  ButtonSubmit,
  ButtonAddToCart,
} from './styles';
import Links from '../Link';

export const Button = (props) => {
  switch (props.type) {
    case 'link':
      return props.variants === 'default' ? (
        <ButtonTypeDefault {...props} />
      ) : (
        <ButtonTypeFullWidth {...props} />
      );
    case 'submit':
      return props.variants === 'default' ? (
        <ButtonTypeSubmit {...props} />
      ) : (
        <ButtonTypeFullWidth {...props} />
      );
    case 'add-to-cart':
      return <ButtonTypeAddToCart {...props} />;
    default:
      break;
  }
};

const ButtonTypeDefault = ({ type, urlPath, icon = {}, text }) => {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <ButtonDefault type={type}>
        <Links path={urlPath}>
          {icon ? (
            <span>
              {icon.position === 'left' && (
                <img src={`${icon.url}`} alt={icon.alt} />
              )}
              <p>{text}</p>
              {icon.position === 'right' && (
                <img src={`${icon.url}`} alt={icon.alt} />
              )}
            </span>
          ) : (
            <span>
              <p>{text}</p>
            </span>
          )}
        </Links>
      </ButtonDefault>
    </div>
  );
};

const ButtonTypeFullWidth = ({ action, urlPath, icon = {}, text }) => {
  return (
    <ButtonFullWidth onClick={()=> action()}>
      <Links path={urlPath}>
        {icon ? (
          <span>
            {icon.position === 'left' && (
              <img src={`${icon.url}`} alt={icon.alt} />
            )}
            <p>{text}</p>
            {icon.position === 'right' && (
              <img src={`${icon.url}`} alt={icon.alt} />
            )}
          </span>
        ) : (
          <span>
            <p>{text}</p>
          </span>
        )}
      </Links>
    </ButtonFullWidth>
  );
};
const ButtonTypeSubmit = ({ type, urlPath, icon = {}, text, action }) => {
  return (
    <ButtonSubmit type='submit'>
      {icon ? (
        <span>
          {icon.position === 'left' && (
            <img src={`${icon.url}`} alt={icon.alt} />
          )}
          <p>{text}</p>
          {icon.position === 'right' && (
            <img src={`${icon.url}`} alt={icon.alt} />
          )}
        </span>
      ) : (
        <span>
          <p>{text}</p>
        </span>
      )}
    </ButtonSubmit>
  );
};

const ButtonTypeAddToCart = ({ text, icon, slug }) => {
  return (
    <ButtonAddToCart>
      <span onClick={() => handleAddToCart(slug)}>
        <img src='/images/icons/Plus.svg' alt='plus icon' />
        <p>{text}</p>
      </span>
      <div onClick={() => handleFavoriteUpdate(slug)}>
        <img src={icon} alt='favorite icon' />
      </div>
    </ButtonAddToCart>
  );
};
