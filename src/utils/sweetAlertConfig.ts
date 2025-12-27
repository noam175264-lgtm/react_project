import Swal from 'sweetalert2';

export const showSuccess = (message: string, title: string = 'Good job!') => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#7c4dff',
    iconColor: '#81c784',
    background: '#fff',
    backdrop: 'rgba(0,0,0,0.4)',
    customClass: {
      popup: 'swal-popup-custom',
      icon: 'swal-icon-custom',
      title: 'swal-title-custom',
      htmlContainer: 'swal-text-custom',
      confirmButton: 'swal-button-custom'
    },
    showClass: {
      popup: 'animate__animated animate__zoomIn animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOut animate__faster'
    }
  });
};

export const showError = (message: string, title: string = 'Oops...') => {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#7c4dff',
    iconColor: '#e57373',
    background: '#fff',
    backdrop: 'rgba(0,0,0,0.4)',
    footer: '<a href="#" style="color: #7c4dff; text-decoration: none; font-size: 14px;">Why do I have this issue?</a>',
    customClass: {
      popup: 'swal-popup-custom',
      icon: 'swal-icon-custom',
      title: 'swal-title-custom',
      htmlContainer: 'swal-text-custom',
      confirmButton: 'swal-button-custom',
      footer: 'swal-footer-custom'
    },
    showClass: {
      popup: 'animate__animated animate__zoomIn animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOut animate__faster'
    },
    heightAuto: false
  });
};

export const confirmDelete = (itemName: string = 'this item') => {
  return Swal.fire({
    title: 'Are you sure?',
    text: `You won't be able to revert ${itemName}!`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#7c4dff',
    cancelButtonColor: '#9e9e9e',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    iconColor: '#ff9800',
    background: '#fff',
    backdrop: 'rgba(0,0,0,0.4)',
    customClass: {
      popup: 'swal-popup-custom',
      icon: 'swal-icon-custom',
      title: 'swal-title-custom',
      htmlContainer: 'swal-text-custom',
      confirmButton: 'swal-button-custom',
      cancelButton: 'swal-cancel-button-custom'
    }
  });
};

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  iconColor: '#fff',
  customClass: {
    popup: 'colored-toast'
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const showToastSuccess = (message: string) => {
  return Toast.fire({
    icon: 'success',
    title: message,
    background: '#4caf50'
  });
};

export const showToastError = (message: string) => {
  return Toast.fire({
    icon: 'error',
    title: message,
    background: '#f44336'
  });
};

export const showLoading = (message: string = 'Loading...', title: string = 'Please wait') => {
  return Swal.fire({
    icon: 'info',
    title: title,
    text: message,
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonColor: '#7c4dff',
    iconColor: '#2196f3',
    background: '#fff',
    backdrop: 'rgba(0,0,0,0.4)',
    customClass: {
      popup: 'swal-popup-custom',
      icon: 'swal-icon-custom',
      title: 'swal-title-custom',
      htmlContainer: 'swal-text-custom'
    },
    showClass: {
      popup: 'animate__animated animate__zoomIn animate__faster'
    }
  });
};

export const updateAlert = (options: any) => {
  return Swal.update(options);
};

export const closeAlert = () => {
  return Swal.close();
};