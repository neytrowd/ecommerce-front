import React, { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import cn from 'classnames';

// Types import
import { ClassNameProps } from '@/Types';

// Images import

// Styles import
import styles from './Modal.module.scss';

type Props = {
   shouldCloseOnOverlayClick?: boolean;
   shouldCloseOnEsc?: boolean;
   needCloseIcon?: boolean;
   onClose: () => void;
   title?: string;
   modalClassName?: string;
   isOpen?: boolean;
} & ClassNameProps;

export function Modal({
   shouldCloseOnEsc = true,
   shouldCloseOnOverlayClick = false,
   needCloseIcon = true,
   onClose,
   className,
   children,
   title,
   isOpen = true,
   modalClassName,
}: PropsWithChildren<Props>) {
   return (
      <ReactModal
         isOpen={isOpen}
         className={cn(styles.modal, modalClassName)}
         shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
         shouldCloseOnEsc={shouldCloseOnEsc}
         onRequestClose={onClose}
      >
         <div className={styles.modalButtons}>
            {needCloseIcon && (
               <span onClick={onClose}>
                  <i className="fa fa-times" aria-hidden="true"></i>
               </span>
            )}
         </div>

         {title && <h3 className={styles.modalTitle}>{title}</h3>}
         <div className={className}>{children}</div>
      </ReactModal>
   );
}
