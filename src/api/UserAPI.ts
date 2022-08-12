import axios from "axios";

export class UserAPI {
  async find(page = 0, size = 10) {
    const { data } = await axios.get(`/api/v1/users`, {
      params: {
        page,
        size,
      },
    });
    return data;
  }

  async findById(id: string) {
    const { data } = await axios.get(`/api/v1/users/${id}`);
    return data;
  }

  async create(value: any) {
    const { data } = await axios.post(`/api/v1/users`, value);
    return data;
  }

  async update(id: string, value: any) {
    const { data } = await axios.put(`/api/v1/users/${id}`, value);
    return data;
  }

  async delete(id: string) {
    const { data } = await axios.delete(`/api/v1/users/${id}`);
    return data;
  }
}

export default new UserAPI();
