import { Toaster } from "@blueprintjs/core";

const toastr = Toaster.create({
  className: "xp-toastr",
  position: "bottom"
});

const parse = props => (typeof props === "string" ? { message: props } : props);

export default {
  show: props =>
    toastr.show({
      className: "xp-toastr-dark",
      intent: "info",
      icon: "endorsed",
      ...parse(props)
    }),
  success: props =>
    toastr.show({
      className: "xp-toastr-success",
      intent: "success",
      icon: "endorsed",
      ...parse(props)
    }),
  info: props =>
    toastr.show({
      className: "xp-toastr-info",
      icon: "info-sign",
      intent: "primary",
      ...parse(props)
    }),
  error: props =>
    toastr.show({
      className: "xp-toastr-error",
      icon: "asterisk",
      intent: "danger",
      ...parse(props)
    })
};
