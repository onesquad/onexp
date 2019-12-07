import React from "react";
import classnames from "classnames";
import Text from "./Text";
import Button from "./Button";

const ModalLoader = () => {
  return (
    <div className="fx-row fx-jc--center xp-button--loader xp-button--loader__dots">
      <span />
      <span />
      <span />
    </div>
  );
};

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      closeTriggered: false
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setModalRef = node => {
    this.modalContainerRef = node;
  };

  handleClickOutside = event => {
    const { isDialog, hideCloseButton } = this.props;
    const preventOutsideClick = isDialog || hideCloseButton;
    if (
      this.modalContainerRef &&
      !this.modalContainerRef.contains(event.target)
    ) {
      if (!preventOutsideClick) {
        this.handleClose();
      }
    }
  };

  handleClose = () => {
    const { close } = this.props;
    this.setState({
      closeTriggered: true
    });
    setTimeout(() => {
      this.setState({
        closeTriggered: false
      });
      close();
    }, 350);
  };

  escFunction = e => {
    const { isDialog, hideCloseButton, onCancel } = this.props;
    if (e.keyCode === 27 && !hideCloseButton) {
      {
        isDialog ? onCancel() : this.handleClose();
      }
    }
  };

  render() {
    const {
      size,
      show,
      close,
      header,
      hasFooter,
      submitText,
      onSubmit,
      submitIsLoading,
      isDialog,
      disableSubmit,
      isLoading,
      autoHeight,
      autoWidth,
      submitIsDisabled,
      hideCloseButton,
      onCancel,
      hideCloseText,
      cancelText,
      containerExtraClass,
      wrapperExtraClass,
      ...otherProps
    } = this.props;
    const { closeTriggered } = this.state;

    //Size

    const isFullWidth = size === "full-page";
    const isLarge = size === "large";
    const isMedium = size === "medium";
    const isRegular = size === "regular";

    return (
      <>
        {show && (
          <div
            className={classnames({
              "xp-modal--wrapper xp-modal--wrapper__sm": true,
              "xp-modal--wrapper__rg": isRegular,
              "xp-modal--wrapper__md": isMedium,
              "xp-modal--wrapper__rg": isRegular,
              "xp-modal--wrapper__lg": isLarge,
              "xp-modal--wrapper__full": isFullWidth,
              "xp-modal--wrapper__close": closeTriggered,
              [wrapperExtraClass]: wrapperExtraClass
            })}
            {...otherProps}
          >
            {!hideCloseButton && (
              <div className="fx-row xp-modal--close-wrapper">
                {!hideCloseText && (
                  <Text size="h4" color="white" weight="semibold">
                    CLOSE&nbsp;
                  </Text>
                )}
                <Button
                  onClick={() => this.handleClose()}
                  type="icon"
                  icon="cross"
                  iconSize="18"
                  iconColor="white"
                  extraClass="xp-modal--close"
                />
              </div>
            )}
            <div
              ref={this.setModalRef}
              style={{
                minHeight: autoHeight ? "auto" : "",
                width: autoWidth ? "auto" : ""
              }}
              className={classnames({
                "xp-modal--container": true,
                "xp-modal--container__footer": hasFooter,
                "xp-modal--container__loading": isLoading,
                [containerExtraClass]: containerExtraClass
              })}
            >
              {isLoading && <ModalLoader />}
              {header && (
                <div className="xp-modal--header">
                  <Text size="h1" weight="semibold" color="grey" family="serif">
                    {header}
                  </Text>
                </div>
              )}
              {this.props.children}
              {hasFooter && (
                <div className="xp-modal--footer">
                  <div className="fx-row">
                    <Button
                      type="primary"
                      isLoading={submitIsLoading}
                      text={submitText}
                      onClick={() => onSubmit()}
                      isDisabled={disableSubmit}
                      extraClass="mx--zero mr--lg"
                    />
                    {(!hideCloseButton || onCancel) && (
                      <Button
                        type="link"
                        text={cancelText || "Cancel"}
                        onClick={() =>
                          onCancel ? onCancel() : this.handleClose()
                        }
                        hasUnderline
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Modal;
