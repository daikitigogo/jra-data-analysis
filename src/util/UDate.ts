class UDate extends Date {

  truncate() {
    const y = this.getFullYear();
    const m = this.getMonth();
    const d = this.getDate();
    return new Date(y, m, d);
  }

  static fromYYYYMMDD(value: string, concat: string = '-') {
    const y = value.slice(0, 4);
    const m = value.slice(4, 6);
    const d = value.slice(6);
    return [y, m, d].join(concat);
  }
};

export default UDate;
