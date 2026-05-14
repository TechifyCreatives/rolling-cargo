import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface CustomAlertProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CustomAlert: React.FC<CustomAlertProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>ANNOUNCEMENT!</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          We're excited to announce our new service updates...
        </AlertDialogDescription>
        <Button onClick={() => onOpenChange(false)}>Close</Button>
      </AlertDialogContent>
    </AlertDialog>
  );
};
