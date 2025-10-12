import { AlertCircle, Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

interface KBCalloutProps {
  type?: "info" | "warning" | "error" | "success" | "tip";
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    bg: "bg-accent-teal/10",
    border: "border-accent-teal/30",
    text: "text-accent-teal",
    icon: Info,
  },
  warning: {
    bg: "bg-warning-orange/10",
    border: "border-warning-orange/30",
    text: "text-warning-orange",
    icon: AlertTriangle,
  },
  error: {
    bg: "bg-error-red/10",
    border: "border-error-red/30",
    text: "text-error-red",
    icon: AlertCircle,
  },
  success: {
    bg: "bg-success-green/10",
    border: "border-success-green/30",
    text: "text-success-green",
    icon: CheckCircle,
  },
  tip: {
    bg: "bg-primary-green/10",
    border: "border-primary-green/30",
    text: "text-primary-green",
    icon: Lightbulb,
  },
};

export default function KBCallout({ type = "info", title, children }: KBCalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div className={`my-6 p-4 rounded-xl border ${style.bg} ${style.border}`}>
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${style.text}`} />
        <div className="flex-1">
          {title && (
            <div className={`font-semibold mb-1 ${style.text}`}>
              {title}
            </div>
          )}
          <div className="text-text-secondary text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}