import axios from "axios";

export class CRUDAPI {
  async find() {
    const { data } = await axios.get(`/crud`);
    return data;
  }

  async findById(id: string) {
    const { data } = await axios.get(`/crud/${id}`);
    return data;
  }

  async create(value: any) {
    const { data } = await axios.post(`/crud`, value);
    return data;
  }

  async update(id: string, value: any) {
    const { data } = await axios.put(`/crud/${id}`, value);
    return data;
  }

  async delete(id: string) {
    const { data } = await axios.delete(`/crud/${id}`);
    return data;
  }
}

export default new CRUDAPI()
