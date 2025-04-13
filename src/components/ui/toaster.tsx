
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { motion, AnimatePresence } from "framer-motion";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <AnimatePresence>
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Toast key={id} {...props} className="rounded-2xl border-0 shadow-xl bg-white">
                <div className="grid gap-1">
                  {title && <ToastTitle className="text-gray-900 font-semibold">{title}</ToastTitle>}
                  {description && (
                    <ToastDescription className="text-gray-600">{description}</ToastDescription>
                  )}
                </div>
                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-l-2xl"></div>
                {action}
                <ToastClose className="rounded-full hover:bg-gray-100" />
              </Toast>
            </motion.div>
          );
        })}
      </AnimatePresence>
      <ToastViewport className="p-6 md:p-8" />
    </ToastProvider>
  );
}
