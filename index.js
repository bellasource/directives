import overflow_tooltip from "./overflow-tooltip";

const directives = {
  "overflow-tooltip": overflow_tooltip,
};
export default function useDirective(app) {
  for (const key in directives) {
    app.directive(key, directives[key]);
  }
}
