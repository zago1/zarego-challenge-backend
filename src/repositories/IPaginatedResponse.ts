export interface IPaginatedResponse<T> {
  metadata: { total_registers: number }
  data: T;
}