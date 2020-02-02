class UDate extends Date {

  truncate() {
    const y = this.getFullYear();
    const m = this.getMonth();
    const d = this.getDate();
    return new Date(y, m, d);
  }
};

export default UDate;
